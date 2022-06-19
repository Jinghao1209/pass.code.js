## 1.5.1 (19/6, 2002)
Fix hex bug, now can hex from any utf-8 character.

## 1.5.0 (7/6, 2022)
Add AES encryption function into package! Support AES-CCM/AES-GCM (128/192/256 bits)

## 1.4.0 (13/5, 2022)
Fixed a bug that RSA Encryption was not working properly and now can specify all the RSA Key include length! Add a new function, `generateUUID()`. 

## 1.3.0 (22/3, 2022)
For RSA or other algorithm, add `privateDecrypt()` and `publicEncrypt()` function.

## 1.2.0 (10/3, 2022)
Update `Decryption(...)` and `Encryption(...)` to make then more secure, and add new function, some new function is use library from nodejs modules, named `crypto` 

## 1.1.0 (27/2, 2022)
Found that the encryption function is insecure, if the encryption process is obtained, it can be directly decrypted without the need for encryption style. So I changed the encryption method, which may be more secure.

## 1.0.0 (26/2, 2022)
Init Project!