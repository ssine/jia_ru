# 运行环境

CentOS 7.3

MariaDB 10.3

Python 3.7

Django 2.14

# 使用步骤

## 配置环境

### Python虚拟环境

#### 安装编译相关工具

```
yum -y groupinstall "Development tools"
yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel
yum install libffi-devel -y
```

#### 安装Python3

```
cd #进入目录
wget https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tar.xz
tar -xvJf  Python-3.7.0.tar.xz
```

#### 编译安装

```
mkdir /usr/local/python3 #创建编译安装目录
cd Python-3.7.0
./configure --prefix=/usr/local/python3
make && make install
```

#### 创建软链接

```
ln -s /usr/local/python3/bin/python3 /usr/local/bin/python3
ln -s /usr/local/python3/bin/pip3 /usr/local/bin/pip3
```

#### 验证是否成功

```
python3 -V
pip3 -V
```

#### 下载virtualenv 创建软连接

```
pip3 install virtulenv
ln -s /usr/local/python3/bin/virtualenv /usr/bin/virtualenv
```

#### 创建虚拟环境

```
virtulenv 虚拟环境名 -p /usr/bin/python3
```

#### 进入虚拟环境

```
#cd进入虚拟环境的目录
source ./bin/activate
```

#### 退出虚拟环境

```
#在命令行输入
deactivate
```

### 数据库

#### 安装

```
yum install MariaDB-server MariaDB-client -y
```

#### 启动

```
systemctl start mariadb  #MariaDB 安装完毕后，立即启动数据库服务守护进程
systemctl enable mariadb #设置 MariaDB 在操作系统重启后自动启动服务。
```

#### 登陆

第一次登陆使用管理员账户，输入新密码

```
mysql -u root -p
```

root账户中的host项是localhost表示该账号只能进行本地登录，我们需要修改权限，输入命令：

```
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
```

修改权限。%表示针对所有IP，password表示将用这个密码登录root用户，如果想只让某个IP段的主机连接，可以修改为：

```
GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.71.%' IDENTIFIED BY 'my-new-password' WITH GRANT OPTION;
```

最后别忘了：

```
FLUSH PRIVILEGES;
```

#### 防火墙

开放端口3306

### Django和依赖

以下都要在虚拟环境中进行

#### 安装Django

```
pip install Django==2.1.4
```

#### 安装MySQL驱动

```
pip install mysqlclient
```

### 创建配置项目

将我们提供的项目工程文件夹放在虚拟环境同级目录下。

#### 修改settings.py

修改数据库信息

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'xxx',
        'USER': 'xxx',
        'PASSWORD': 'xxx',
        'HOST': 'xxx',    # Empty for localhost through domain sockets or '127.0.0.1' for localhost through TCP.
        'PORT': '3306',
    }
}
```

修改可接受的host

```
ALLOWED_HOSTS = ['ip或域名',
                 '127.0.0.1']
```

#### 创建数据库表 或 更改数据库表或字段

```python
# 1. 创建更改的文件
python manage.py makemigrations
# 2. 将生成的py文件应用到数据库
python manage.py migrate
```

### 使用nginx和gunicorn

#### gunicorn

安装

```
pip install gunicorn  
pip install greenlet  # Required for both
pip install eventlet  # For eventlet workers
pip install gevent    # For gevent workers
```

再Project根目录编辑配置文件gunicorn-config.py

```python
import os
from multiprocessing import cpu_count

bind=["127.0.0.1:9000"]   #配置nginx时，需要将此地址写入nginx配置文件中
daemon = True  守护进程
workers = cpu_count()*2
worker_class = "gevent"
forworded_allow_ips = '*'


keepalive = 6
timeout = 65
graceful_timeout = 10
worker_connections = 65535
```

启动

```
gunicorn -c gunicorn-config.py Project.wsgi
```

#### Nginx

安装

```
yum install epel-release
yum install python-devel nginx
```

修改配置文件`/usr/local/nginx/conf/nginx.conf`

将server段替换成如下

```
server{
    listen 80;#监听的端口
    #监听的ip
    server_name 127.0.0.1;  #0.0.0.0为监听所有ip，建议如此设置
    server_name your_ip
    server_name your_www;
    #当请求这些server name的时候，nginx才会做反向代理，0.0.0.0是指全部
    location / {
      proxy_pass http://127.0.0.1:9000;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
    }
    # location 顾名思义，定位，就是当访问 / 的时候，nginx会将请求转给本地的8080端口，而后面的设置都是一些基本的配置，可以直接用
    location /static {
      alias /path/to/Project/static; #设置为静态文件目录
    }
    location /media {
      alias /path/to/Project/media; #设置为媒体文件目录
    }
    # 这个就是配置静态文件的地方，要用绝对地址，对应最开始的目录形式，假设project就在/home下面，那么这样配置就可以的了，还有个前提是，你在开发的时候，采取了django的建议，每个app的静态文件都用多了一层app_name的文件夹来包住。
}
```

