Link to site
https://intramural-league.netlify.app/

# Intramural
This is a student project that uses Ruby on Rails and React to create an intramural sports league website

## Overview

_**Intramural League** is a web application that uses Ruby on rails in the back end and React on the front end to let users see who is playing for what team after they sign up. 

## MVP

This website should have CRUD functionality on the front and back end. Users should be able to log in and see which teams have which players for which sports. Only the admin can edit or delete players.



### Goals

- Have a user sign in to see content
- Have a user sign out ability
- Be able to add player to a team
- Be able to delete a player from a team
- Be able to edit a players info
- Render appropriate content to pages

<br>

### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Open-source JavaScript library used for frontend development._ |
|   React Router   | _The standard routing library for React._ |
|     Ruby      | _An interpreted, high-level, general-purpose programming language._ |
|  Rails  | _A server-side web application framework written in Ruby._ |

<br>


### Client (Front End)

#### Wireframes


Landing Page 


https://app.lucidchart.com/documents/view/9ced026d-3606-4e8a-994c-6e7c82c1c42e/uP1BopAARZY8

https://app.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=LandingPage#R3VjbciI3EP0aHu0aZgDD44Ltjau8qa04u0metoRGgGLdrIuN8%2FXpljTAMFB2dk1qyzzAdKulvpwjtZheNZPrj5aY1SddM9Eri3rdqy57ZdnvD8fwg5rnrBmUg6RZWl5n3VZxx%2F9hWVlkbeA1cy1Dr7Xw3LSVVCvFqG%2FpiLX6qW220KLt1ZAl6yjuKBFd7R%2B89qsmsaLYDvzC%2BHKVXY%2BHeWBO6P3S6qCyv15ZLeInDUvSrJXt3YrU%2BmlHVV31qpnV2qcnuZ4xgcVtypbmXR8Z3cRtmfKvmTC6uJhfzMeTwWTYH%2FYnw7O8wiMRgTUpxED9c1OcpxX37M4QivITMKBXTVdeCpD68BizZ7h%2BAdImQRQEmTMx3ZRopoW2MKS0Ymjqrb5njRIqV8TPZqRBAp0suBB70xda%2BWsiuUDSfWW2JopkdSZYv8zyIR9E8KUCHYXKMRicUi05ze66ZW3qxKxn6x1VLvNHpiXz9hlM8miDeLMlsvi0Q69ilJWrHWr1iyprSSb1crP2Flh4yNi%2BEufJyzgLvgPLbvHfAuzvA3DwEwE4eD2CJ8CvPzwA4EiAy2nNH1tAjh4CHidTyNOf5Sp9AIu%2Fg%2FN88bw1gKdl%2Fo0LOUNUo7vVlkkMyLiAv3VEANxwj6lBQr1ylk5kBycy8wFHSc0Nd5xytQSJCZ6tHFAG10AlD05qFD2TJq7JFeU1r4PCpQN%2BAZfAP1r7xjeLx%2BkSKAJuBH8I5ByevuA4U1xG52jCk%2FAISiKT94fAHfwoDdQOaMTWzFLuiedaoUshiKS68ZuMIY0mmuiOmzgRv0jMW0IWuqkAhOMxnsvkigSP8XIbYtxN8Th6s8xYtmKwjWysZVQ%2BahEMBMRi6LFuBXMORQo7ZwtBLErAHheWnKCZwvAT2UERLIZxtabMeBYSYrGumlLCaJxBg%2BE18Wl2rICxGhqwatBKSMTAaBCGpBriIosFgIsytGtmk53UIgVMUul5LLHb4BjkecMwoP0uyXbUkcRt7Ul4fReZGGE1zDqD6fiIGR5smKJUUeQugqGgpCgyuGVs%2Bb%2BBK%2FKO0uCI8nwHJfkQWMw%2F1M3ILF5qPJKySHuLQAQbkjKSpsCGS%2FUmKJE5qoTQEQ8gtU8UeETy5MDjHgH7SFhiKbZr6nHGnAHK0Zyn35pTT7YIs7URnAJGyJlfmdTbzYRhyP1MgQRkq3Pb48BBJlgpm7iPZazTSBSQq62TIC%2BUtw4EE2fi9uabEsbUtNtwz8btyvZjwgVwWDFHOayEXCMS7yhq7kybZK%2Fh3v96%2BXmbK06nE2KTA1zFhzzgtUnbIB7MMKs4Qbsctvvl6EC%2FHI4PtcvxSfrl6OULT1OmW0TqswYuYz%2BoLufaey338ayJW22Q7pR8hxNHqt8BHFY3GIlcL%2FFv1bnU9D6Y8yhw6s4dl0awG4oxdS%2FLk%2FjpUPCFW9iPXblOTJmyeiVlBsUbUCZ8Lb%2F9ee3Gny9%2F%2B0Y%2Fhb9%2Bn34xB%2F8OpXMCa3KwHeHAmYvVw25UDsy624pulLdEBkswgltGlnjWbw6gtPaREwjbXZtgbS4cv2C%2FeC5IXtfoZnrolGvz6gi2BxhwFO7B3o16OOygXR66Tw9PBXbZAfsO6wJXAfN%2BURhXbRTGXRT6%2FQMolKdCoTqGwo16vyhMRj8ZCq9ol%2B%2Fv%2FcAPQbh3mk3%2BwxueE2F40d1J8Afbx38zEt%2BAvtvtNNjbTlVxAIxDN4nv2E8gbt%2FXxrGdt%2BLV1b8%3D


Sign Up

https://app.lucidchart.com/documents/view/7e105081-b58f-4c7e-9479-43c772a42235/uP1BopAARZY8

https://app.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=SignUp#R7Zlhc5owGMc%2FjS97BwlReFmt7Xq37np17bZXvQgRMgNhMUy7T7%2BgQU0Tr65W69nxBvJ%2FQgL%2F30MCoQV7%2BexK4DK74QlhLeAlsxa8aAHg%2ByhUu1p50koAgoWSCppobSUM6B%2BiRU%2BrFU3IxKgoOWeSlqYY86IgsTQ0LASfmtVGnJm9ljglljCIMbPVbzSRWXNjnrcKfCI0zXTXIdKBIY7HqeBVoftrATiab4twjpu2dP1JhhM%2BXZNgvwV7gnO5OMpnPcJqcxvbFuddbogur1uQQm5zQrvTGXaGYRREyEd%2BhM50C78xq0hzC%2FMLlU%2BNOdOMSjIocVyXpyoDWrCbyZypkq8O53dP6vY9VVreYF1geEhYd2lRjzMuVKjgBamrSsHHpBGVc958W0YaEnUnI8rYs9NHvJCXOKesTroHIhJcYC3rBPOBLrv6wIymhdJi5RxRwW7Mcxrr7mxbG5%2BIkGS2JmmbrwjPiRRPqoqONsSbR0IXp2vp5bW1mK2llu9BrWKd1Omy7RVYdaDZbsk5epkzo2tY1s1%2FC9ivAxgcEcBge4K786sewOP3y0l4e3H3GN9UP75270vns9pmUntkwGz%2FqngTOJvM3TxXFUBQzlZBdZTW%2B%2BtCCpxXAtdX8JngVDWvG1bXuWh7UdPKGeWlNDPEfKo307fw1WSoGpLPdSCnSVJ303WNP2YevgHt4BluhCzawAUb7Qs2sGAPal%2BAV5WnSyGEJoXQpuD7DgpgXxTgJgrXxelSiNpHRqH9f%2FLabfKK%2FuH1Y3eG%2Fs2ZB8Z9f3z32Ps5LsMp%2BUYc45nF0OTzwmvnBkccvm02CZkuQc92qe05TIJ7c2njeHN%2F3KP%2BThyQZ3JYTrRGtu5pwHFiQBaGfo4pO10EMDARBNCBABwSgT3mf8E5%2BTgEYOe9CXQsArd4MplykXwcCkH03hTC45s3g%2FDlVAUuk95iZcNp0harG%2B9tUgAcX5QHNal5aTlqlxzfGgd2aYsV0UO7hDxkuISQ%2FcBFBzVp4%2BrESb%2BnWmtEdrK6vqleMTeo4uqnwDy29usF9v8C


Sign In
https://app.lucidchart.com/documents/view/cdad8447-bdfb-4e74-8a2f-91959a46002d/0_0

https://app.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=SignIn#R7Zhdb9owFIZ%2FTS4rOXaSJZeFwYa0ThNInbQ7LzGJVydmximwXz8bHMA4iLbjS2XcJH6Pv3ifE8eOh7rl%2FJPAk%2BKBZ4R5EGRzD330IPT9MFYXrSyMEsBgpeSCZkbbCCP6hxgRGLWmGZlaFSXnTNKJLaa8qkgqLQ0LwWd2tTFn9qgTnBNHGKWYuep3mslipcYh2OifCc2LZmQfmEiJm8pGmBY447MtCfU81BWcy9VdOe8Spt1rfFm16%2B%2BJricmSCVf0uCXoF8fhj%2BGw2Q4rYNB%2Fzl5pHeml2fMavOHzWTlonFgVlBJRhOc6vJMYfZQp5AlUyVf3QpeVxnRYwBVWv9JXWD4J2EdnD7ly0pdzrhQoYpXRFeVgj%2BRRvQgAsvfOtLYrQcZU8Z2mo95Jfu4pExn1iMRGa6wkU0W%2BdCU28bAjOaV0lLlHlHBTspLmprhjClESDLf67a%2FZqiyn%2FCSSLFQVUyDhnqT96Y42%2BSQDyIjFtsJBJBRscncfN33Bq66MXxfwRoeZs3oFpptAMcA%2FjaIwRVBDF5O8UQMUQvDiEnjkQUz%2Bl3zJnA3Xbp5ryrAYDLfBNVdrq%2BDSgpc1gLrGXwhOFfdm47VPFd9r2o6OaPslXaG2E%2F2fvoOPg2LqrX33gRKmmV6mE7bGmTn4RFoBzu4w9ChDdtgh6eCHTiwR9oXCOrJ%2B6UQI5tC7FLw%2FRYK8FQUwn0UBtX7pZBEV0Yh%2Bv%2Fy%2BreXV%2FKKLciJGH44zNDmc2DreQyTQtslBFyXItBiEjqZS%2FEtrjchsDmsX7RWtp5zwUkcDL0SU%2FZ%2BEaBg51FIWhDAcyLw3dPpNzydzrjIbgdDcHkMbYeOC6%2FbQbyTrC0bFNjm0slO1767W786l4LLu%2BTupi%2FuUghCy6UwdJ%2B45KwmuZvdW9gCOMdvN1nbtqtvWPdUcfPddRnb%2BnyNen8B

Home Page

https://app.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Home#R7ZjLbqMwFIafhmUrwBDCskkvU6mjqRqplWbngANWbEyNmdB5%2BrGDISEmatMJVdQ2ixaf41v%2B7zccYoEprW44zNOfLEbEcu24ssCl5bpB4Mq%2FKvBSB0IvrAMJx3EdcjaBGf6LdNDW0RLHqOh0FIwRgfNuMGJZhiLRiUHO2arbbcFId9UcJsgIzCJIzOgTjkVaR8e%2BvYn%2FQDhJm5UdW2cobDrrQJHCmK22QuDKAlPOmKivaDVFRGnX6FKPu96TbTfGUSbeMiD7Zd%2BvSJU%2BPTz%2Bfr6hxVw83J85fj3NH0hK%2FY31bsVLI8EqxQLNchip9kpStsAkFZTIliMvOSuzGKlFbNlqv6VqEDhHZAKjZbLuNGWEcZnKWIZUV8HZEjVBywX2%2BtNmGr3VIgtMyM7wBcvENaSYKGc9Ih7DDOqwtpHj6nbfGpDgJJOxSMqHZHISMYojvZwWBXGBqr1yOy1EaX7EKBL8RXbRA4DGrn3fuGC1MZFjj3Qw3XaQ3YyE2rpJO%2FeGrrzQgA%2BBPXodNsFbbLYJHIP4%2Byh6p0PR8d%2BOcSiIQQ%2FEERFapA7N0XPJmsRZsZbzQnZwvbzaJOVVov7fZoJDWnKotnCHYCKn1xPLjdZz1z0N00h9Rdci3bO9H7%2FBT9HC8vZ7oRMUx7FaZtJ3F%2Boa8Qi4vR3eI9%2FA7fbR9gejPTZoz5Qwrl3mnxfD2OtiCE0MjtODwR0MQ7gPw232eTGEwYlhaCb%2BfoC99wEWHlCHDAXRPEsGxMb3d4rGPSuwwEypNGdCMLrLLIZF2tI0BN3ivnucBMt7rSJnz9VOaJWol5pzyqJlmZ%2BvGzgqzgtMc4JuI7Uns4wN1x%2FDZq846%2F9sdGTXOMDv2AbYpm2A33f0R0PZBrzh7HcFf%2BW95Qgytc%2F9plzoO11uj0zDqeScnkrBjplOQCW3R6XDamhn3FdDT2CxRGIO1Ra%2BWOnshjtnwTMpex9ZLAAwEOQZiyIp%2BFcDHAT%2BiQE2342%2BC4kTKyTae%2F1HFBKyufk5dZ3b%2Bk0aXP0D



Basketball Page

https://app.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Basketball#R7Zpdk5owFIZ%2FjZfrQPgQLle72zpdZzpjp72OECE1EAqxan99Ew0qJK5twZVZ9UZyEpJwnjfnxEjPGiXrjznM4gkNEekBI1z3rA89AEzT8fiXsGykxQb2zhLlOJS2g2GKfyNpNKR1iUNUVBoySgnDWdUY0DRFAavYYJ7TVbXZnJLqqBmMkGKYBpCo1u84ZPHO6jnGwf4J4SguRzYNWZPAsrE0FDEM6erIZD31rFFOKdtdJesRIsJ7pV929z2fqN1PLEcp%2B5sbFp9pNGGT1P1h0rk9m6DnsfXg73r5BclSPrCcLNuUHljFmKFpBgNRXnHMPWsYs4Twkskvc7pMQyTGMHhp%2F5CiQOAMkSEMFtG20YgSmvOqlKZINGU5XaDS2AOWsf3sa0p3i0HmmJDa7XOasmeYYCKU9Q3lIUyhNEsVmUCWdWNAgqOU2wLuPcQrhwFNcCCHk05BOUPrk9429wy5%2BhFNEMs3vIm8wZbUpe6dXWl1kJBpuLJJfKwfu1QWlMKN9l0f2PILifcfUJcr6jXWBB%2BhOQbQBvD%2Fg2hfEaJVhWiWbM5jvBhEcB6ieGTMI9iLoPGFFphhKrw0o4zRpM4shEW8p6k49Ih72e2jbMNoppUK7z0TM0nWkcgJ%2FYQGi2XW3xZwUPQLnGQEjQMxJzUI%2BNuPIrMzymomo5ZVA7yqbPax4Eg2jqdRjW1cTDaWRjYuYdIpFf24P5e0rHgotu575A2Ana0PlfwqEt%2FjlOUwWeZQTOEFwYh3LzvmE931vWupyJQ7mFUVVhXD6aihqLQuzQSHoRhmqMtdVWG1EeprYcJVgz3QBYnLRXpboT0VjgHGMnu%2FGLxayvU1OdfUYAAXw%2BCcwjBO3y8Gf9A1DO5939Nw32MZ19%2F4DBpnMMvVZbCvCCa80ry5tGW6VcoDoIE8eNOV6jVmbHo6xl8I3KD8BhE7NcTetRGD5ohtLeIhLBaIzaCYwo1RtkEtXPsqZaD7vXE5yrpjpRaDNbg9xgOnY8G63CPcg3VbiN0a4qsHa9u8L%2BN2GQ%2F8ru25bN2B4n0ZN0DsdW3PZTc%2F%2FHsN8Q2u4hpiz7w6YvXE7464zWTcAcTqaeIdcZs%2FjjuAWHdS2R5i6%2BYQK6tY80%2FcGyNufox5R%2FxqLr4%2B4sueYt4eYiVQXx%2Bxer71GIYKgaonzrxH1YajfNCvBjxfk9M8R%2FWUdSlPleg65inHGHTOU%2BphSxc85VlvqClePLwPua07eq3UevoD

Player Profile

https://app.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=PlayerProfile#R7Zlbb9owGIZ%2FDZeVciZcQmm3TttUCalbL93kI7HqxMw4JfTXzybO0UGFNqxVGTfEn495nze244zsyyT%2FwtAq%2FkFDICPLCPORPR9Zlmm6vviTka2K2JZXRCKGQxWrAwv8DCpoqGiGQ1i3CnJKCcerdjCgaQoBb8UQY3TTLrakpN3rCkWgBRYBInr0Fw55XER916jjXwFHcdmzaaicBJWFVWAdo5BuGiH7amRfMkp5cZXkl0CkeqUuRb3rPbnVwBik%2FJAKC9hEz88xyWY0nZPpHXX4%2FYVq5QmRTN2wGizflgpsYsxhsUKBTG8E5pE9i3lCRMoUl4xmaQiyD0OkqpuUCYIegMxQ8BjtCl1SQpnISmkKsihn9BHK4Miyjd2vyinllp0sMSGd6kua8muUYCKddQcsRClSYeUi01Lpvj4QwVEqYoFQD0TmLKAJDlR3ShRgHPK9apsVQ%2BF%2BoAlwthVFVIWSeul7ldzUHjINTwXjpoEMW0WRcm5UtV3DFReK7xGsrZdZE9xA0wQwBPDXQXQ%2BEETncIonYuj2MPQIVxq1YHp%2FMlpmXKx3ak5FActZ5XWmuIrk%2F03KGUoyhuQIvgOKRPOqYTHOou2ipOYZIS9vO6T9ZO%2Bnr%2BGTsLCYe6cqI8FhKLuZ9c1BbR8OQNvp4HZdjbbVB9s9FWxPg72QulhGtvq8FHy7TcHXKZhmDwXrVBTG%2ByjcpJ%2BXwsT7YBT8%2F4vX2xavyRFbkBMxnLx58XL8vsXrlqAtMPP8FqzO9mSsE3b8PsAne0pL6wy%2BP1HvWOdG2OxMw7anI64e9H8yD5t9b4xDEF5AfvZ4qx3o%2B%2BHte0kcAu83YGuQt%2F4zSx6E9GeP2n931LaGeg4EOGgQ2mK8cB40gFa20X0R69m69GnlnUwrR9PqKsT83ZUy3Q%2BnVN8JxXEnimi9Kk5ylziXWg4hlDtpC2X1zLSO0SNUFRxeKf31XlMK0nAqD7Hraa2hE%2BSY%2F1ZWk9f3jfg8b2TMt2UiFQP%2FXRaTiftmTl1plyprFaOCUDso74gvRk4zFsAB7uCIRcBfLKjjbOBye2iVMQYEcfzUHnAfQdXDLcW7xU25Zdzddk06JihuVNWyGmfunYZ8s9OQ02moEEJraGeo6rbf4DH98OJIj5WOMY5xTOlM82Bnnp%2FHvK7H%2FFd6bNz1WPcDwqs9JpL156mieP2Vz776Cw%3D%3D


### Challenges

The biggest challenge is time. With only a week to complete this project, some sacrifices have to be made in terms of what is realistically able to be done in the time allotted. Another challenge for me personally is going to be with styling. 

### Component Hierarchy
```
Landing (2 hours)
  |__Container
      |__Header
        |__Title
        |__Sign up
        |__Sign in
      |__Main
        |__Main image
        |__Into Paragraph
      |__Footer

SignUP (2 hours)
  |__Container
    |__Header
      |__Title
      |__Sign up
      |__Sign in
    |__Main
      |__Title
      |__sign up
        |__name field
        |__email field
        |__password field
        |__button
    |__Footer

SignIn (2 hours)
  |__Container
    |__Header
      |__Title
      |__Sign up
      |__Sign in
    |__Main
      |__Title
      |__sign up
        |__email field
        |__password field
        |__button
    |__Footer

Home (2 hours)
  |__Container
    |__Header
      |__Title
      |__Sign up
      |__Sign in
    |__Main
      |__Sport
        |__Image
        |__button
    |__Footer

Sport (2 hours)
  |__Container
    |__Header
      |__Title
      |__Sign up
      |__Sign in
    |__Main
      |__Title
      |__Image
      |__Teams
        |__Team1
          |__Player1
          |__Add Button
    |__Footer

PlayerProfile (2 hours)

  |__Container
    |__Header
      |__Title
      |__Sign up
      |__Sign in
    |__Main
      |__Player info
        |__edit
        |__delete
    |__Footer
  
  |_Back End (Full Day)

  |_ Styling (Full Day)
```
<br>

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and Title._               |
|  Main  | functional |   n   |   n   | _The Main will have all the rendered images and data._       |
|   Sports    |   class    |   y   |   n   | _The Sports will render the sports on the page with images     |
| Teams | functional |   n   |   y   | _The Teams will render the teams with the players listed props._                 |
|    Player    | functional |   n   |   y   | _The Player will show info about individual players._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

<br>

### Component Structure

https://app.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=ComponentStructure#R7VrbctsgEP0aP1aDQOjy6CZp00zTesa9JE8dahGbqSw8shzb%2FfqiCF2AxIkVj1Bn4hdrF1jB2QPsIkbobLn7mJHV4prHNBlBEO9G6HwEoeshV%2FwVmn2pibyoVMwzFstKjWLK%2FlKpBFK7YTFdKxVzzpOcrVTljKcpneWKjmQZ36rV7niivnVF5tRQTGckMbU%2FWZwvSm2IQaO%2FpGy%2BqN7sAlmyJFVlqVgvSMy3LRW6GKGzjPO8fFruzmhSgFfhUrb78ERp3bGMpvlLGqAfX3593ayvkvic8fFkfHF1OXsnrdyTZCMHPF6tZH%2FzfQWCMCTwFsL77YLldLois6JkK1wudIt8mQjJFY%2FSGs1yunuym249eMEaypc0z%2FaiimyAfFw2kYRBEr5tg75bQbpoIR9KHZEOn9eWG0zEg4TlCIigAdFnksYsnVuFyQ2AAhMMbOOEDJwuhWWrIGFvaCB5BkhTNk%2BF5rvdWYdVoFBoGyj8FFCfUqtA1evRYJDyTaT4bEYzqzD5OqGsz7zAgOk9Wf%2Bh%2BW9StLUIlRcMDarQgOobJcv1oFDyrM%2B7aIAo6dPOPkpVHN%2BCaZKQfbE8gUnG71hCh0UsHFmHzAzKhwWZzrIBQGaGCyZCaTwuEkIhpTylKip0x%2FIb8QycIPSlfPsgAz%2BU8nkxfFAJ%2B5YwoRkTAxEeKnXlu2lspJYawqJ%2FfJPN6HMBo%2BmJFtL4EaArXUYTkrN7tRuPoS%2FfMOFMdLBJMrT4GUWaA8vuy1bt3FM3FGmGPM1QTrI5zQ1DD2Soh%2F0KfphB0pH8SEUHbiqXF8Jtu6ShxoO0P5oH5fgPjAD6NolQz9wqkepKBBHcODBUbXnAwThqfrhfapiBYUdquMdQo15w2ovNwYXmhIsK%2Bi9IhyLPCaDKlSByPK8b9bwQO6D10ywjoJQCv18WmjF31w0M22BUZJMogQ8dHCAcIReGIQiQ4llPcEYsKgEMAwwxCmE3%2BgSuFlrjnrcwM9%2FoyJCT88Oa38EhvyP%2FJH43TjJQv36HZgI1nJXBnufFPuAqfsFdQxJhSzXk9%2Bxg%2BOZgwylYbMcQNDFheBpfYxg5oV1vm59J3rx92NuefmzQ3dt9b9rQ%2FN4zHG%2B%2FIAFAVllhuK8%2BGn89E%2Fo%2BgYCvPqGqTyBEUuS3U03gRF7wXLpZSPoxleWcAb%2BQhNAmCSFQryN4oCMFIdbuNfS9FJlHYNeE2f2Yqt%2F1cKvN2N5lj5OdBslJdfR5kJ25WLHj2cloNU6oJ5%2FOl6PPgrSkznVPNRmF2FzpKqs3F%2BPQxT8%3D

<br>


## Server

### ERD

https://app.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=LeagueERD#R7ZlfV9owFMA%2FDY%2Fs9B8FHoeKm3MbG07Ul53YxjYzbWoSLPjpl9KkbQhjxQ03j%2Fpi783NTXPv796kh457kCyOKcjijySEuONY4aLjHnYcx%2FZcW%2FwrNMtSM%2FSGpSKiKJRGtWKKHqBUWlI7RyFkmiEnBHOU6cqApCkMuKYDlJJcN7shWF81AxE0FNMAYFM7QyGPS%2B3A6df6dxBFsVrZ9uX%2BEqCM5U5YDEKSN1TuUcc9oITw8ilZHEBcBE%2FFZfZ%2BOcOnt%2F7xyRd2B76NPpx9Ou%2BWzsa7TKm2QGHKH%2B36CMwmzBvcTeNzD0xsy%2B%2FfJV2513uA5zJecq98qQII0%2FBtkQchHX0lqdCOYp5gIdriUbwRXV4IwXrTU%2BJlc%2BywIMmqpKWSFog3pgnpsjFSTyoENYdxQHn9LglIl0o7RhhX64QNiXFKbqvMu0JDyTwNYSjHW4ZWpoCROQ1kXB5ub8bvzr0fF9lk%2FCW3jt9en3S7vicRBzSCfIthT3qEoYavTN0xJAkU4RIGeQ1tT4IYN3hVOgox4Ohehx7I2okqd9UKE4LEhh1L1rk7lC8uq9xVfpWLcudyVpOyNUeet%2BbIWnNURsZwJB4a265VK4h3AFq1nVei2xH9n%2FDn2e4b19XI6Q0ei6Dpyxs%2BMYXeK4XPlUJnWP9pEPXXIdoJyF%2B73V%2BH3HryNNicM0iZASjLUYLBCswbkvKpHCkIDGKEw1OwJPMiAYKU4FZJo5hQ9CDsgUJ5BZK8GPYszWJazJTEUMiEzUQRY1eqU8C4tAkIxiBj6Lp6k0QEC6UjwjlJlCMNxOrWZlJr78zpPaQcLraSqg5UVz8HbVdmuUGy7W9A2V4%2FeTdg%2B1VclEEaiSBU66lLqlxu0HI1x9cXA5hDmgIOR0UQ2R%2FyF13xD3nv6iC%2BGgSTz%2BPhxezssGse0MLc8XHBzjUVT1HxVCCZggSaIzABCJvqDDCWExp%2BD1EEBTCGQUCh2Ff4HWwYm2dhNbZWBTpNeYw4nGZgdQnMxReT3rV%2FQYkO2JaqNHFSh2FbetabSZMeLZO7tg3fPNKmGaFmwPbRNvyX2jbcftvEO49rG77eN5y26%2B23cWy%2BVPVbdY6ya%2Fx5Ff%2B2ZKuK%2BH12ZXT9lsH1%2F0IRbwyhWcNnECSvJbzPEu61PYtfQgn7O5TwvzvAm1BsraPnU%2Flm4CcYLCF9ktp%2Fsbf%2B6pNxX7f%2B51T7PQPBTxvrXL6noWciB4byRHy5wlUKOo77X%2FcMvzVMT3DnF2L9w0WZ4frnH%2FfoJw%3D%3D


## Post MVP

My post MVP would include a scheduling functinality and more data for each player like points per game, assists, basically more statistics. I also think a trade functionality between teams would be an intersting challenge. 

<br>
