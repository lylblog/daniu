#!/usr/bin/env python3

import re
import sys
import datetime
from Crypto.Cipher import AES
from binascii import a2b_hex



## License check
def license_check():
    license_dic = parse_license_file()
    sign = decrypt(license_dic['Sign'])
    sign_list = sign.split('#')
    date = sign_list[0].strip() # Date

    # MAC和DATE
    # mac = sign_list[0].strip()
    # date = sign_list[1].strip()


    # Check license file is modified or not.
    # if (mac != license_dic['MAC']) or (date != license_dic['Date']):  # MAC和DATE
    if (date != license_dic['Date']):                                   # Date
        print('*Error*: License file is modified!')
        sys.exit(1)

    # Check MAC and effective date invalid or not.
    # if len(sign_list) == 2:
    if len(sign_list) == 1:

        # mac = get_mac()   #  读取本机MAC
        current_date = datetime.datetime.now().strftime('%Y%m%d')

        # Must run this script under specified MAC.
        # if sign_list[0] != mac:
        #     print('*Error*: Invalid host!')
        #     sys.exit(1)

        # Current time must be before effective date.
        # if sign_list[1] > current_date:
        if sign_list[0] < current_date:
            print('*Error*: License is expired!')
            sys.exit(1)
    else:
        print('*Error*: Wrong Sign setting on license file.')
        sys.exit(1)
# 解析许可文件
def parse_license_file():
    license_dic = {}
    license_file = 'License\\License.dat'
    with open(license_file, 'r') as LF:
        for line in LF.readlines():
            if re.match('^\s*(\S+)\s*:\s*(\S+)\s*$', line):
                my_match = re.match('^\s*(\S+)\s*:\s*(\S+)\s*$', line)
                license_dic[my_match.group(1)] = my_match.group(2)
    return(license_dic)


# 解密，aes后字符串需要与加密文件的字符串一致-----16位
def decrypt(content):
    aes = AES.new(b'daniuappdaniuapp', AES.MODE_CBC, b'daniuappdaniuapp')
    decrypted_content = aes.decrypt(a2b_hex(content.encode('utf-8')))
    return(decrypted_content.decode('utf-8'))


# 检查MAC地址
# def get_mac():
#     mac = ''
#     SP = subprocess.Popen('/sbin/ifconfig', shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#     (stdout, stderr) = SP.communicate()
#
#     for line in str(stdout, 'utf-8').split('\n'):
#         if re.match('^\s*ether\s+(\S+)\s+.*$', line):
#             my_match = re.match('^\s*ether\s+(\S+)\s+.*$', line)
#             mac = my_match.group(1)
#             break
#
#     return(mac)
