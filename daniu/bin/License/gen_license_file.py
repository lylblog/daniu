#!/usr/bin/env python3
# 生成加密文件 License.dat
from Crypto.Cipher import AES
from binascii import b2a_hex

def encrypt(content):
    # content length must be a multiple of 16.
    while len(content) % 16:
        content += ' '
    content = content.encode('utf-8')
    # Encrypt content.
    aes = AES.new(b'daniuappdaniuapp', AES.MODE_CBC, b'daniuappdaniuapp')
    encrypted_content = aes.encrypt(content)
    return(b2a_hex(encrypted_content))

def gen_license_file():
    license_file = 'License.dat'
    with open(license_file, 'w') as LF:
        # 安装机器的MAC地址
        # LF.write('MAC : 00:15:5D:E2:91:70\n')
        LF.write('Date : 20231022\n')
        # sign = encrypt('00:15:5D:E2:91:70#20220101')
        sign = encrypt('20231022')
        LF.write('Sign : ' + str(sign.decode('utf-8')) + '\n')


if __name__ == '__main__':
    gen_license_file()