import os
import win32api
from daniu.bin.License.parse_license_file import license_check

# Main function.
# 自定义命令
def start():
    # 方式一
    # cmd = "D: & cd D:\demo\daniu & python manage.py runserver 127.0.0.1:8000"
    # os.system(cmd)  # 后台打开

    # 方式二
    cmd = "start.bat"
    win32api.ShellExecute(0, 'open', cmd, '', '', 1)  # 前台打开需要改cmd="xxx.bat"

if __name__ == '__main__':
    license_check()
    start()
