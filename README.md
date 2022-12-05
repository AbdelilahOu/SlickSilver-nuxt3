# Link Shortner with nuxt 3

<div style="display: flex; gap: 5px; align-items: center; justify-content:center;">
</a>
<a href="https://prisma.io"><img
    src="https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F001%2F287%2Fsquare_64%2FprismaHD.png&w=64&q=100"
    width="48" height="48" alt="Prisma" /></a>
</a>
<a href="https://nuxt.com/"><img src="https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F001%2F054%2Fsquare_64%2Fnuxt.png&w=64&q=100" width="48" height="48" alt="Node" /></a>
<a href="https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-azure/?&ef_id=CjwKCAiAhKycBhAQEiwAgf19es08kZWMOFbGydQG0QNjMrqvdepKbqEQ_Klg4yQT2QZMP9-wxZ4QTBoCeCMQAvD_BwE:G:s&OCID=AIDcmmmalyst0e_SEM_CjwKCAiAhKycBhAQEiwAgf19es08kZWMOFbGydQG0QNjMrqvdepKbqEQ_Klg4yQT2QZMP9-wxZ4QTBoCeCMQAvD_BwE:G:s&gclid=CjwKCAiAhKycBhAQEiwAgf19es08kZWMOFbGydQG0QNjMrqvdepKbqEQ_Klg4yQT2QZMP9-wxZ4QTBoCeCMQAvD_BwE"><img src="https://raw.githubusercontent.com/github/explore/eaef8552d8b082ffafe2bfc8a5023d47da904aac/topics/azure/azure.png" width="48" height="48" alt="Node" /></a>
    
</div>

## setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## connect to azure sql

the main problem I had was connecting to azure sql and its hard to find an example that shows you how to write the connection string,
here are some resources to help you :
[Full Stack Application with Azure SQL & Prisma for Beginners](https://www.youtube.com/watch?v=sFk5G_U025Q "Full Stack Application with Azure SQL & Prisma for Beginners")

### connection string

.env file

```bash
DATABASE_URL="sqlserver://(your sql server name).database.windows.net:1433;database=(database name);user=(user)@(sql server name);password={(password)};encrypt=true"

```

here are the steps you should follow to get all the informations you need :

1.  Got to your azure portal account
2.  Create a sql server (**remember server name**) and your sql database (**remember db name **)
3.  Add firewall rules to your database (your sql server > Set server firewall > scroll till you find Firewall rules > add your client IPv4)
4.  Log in to your sql database (your sql database > quer editor > create a log in or continue as current user) (**remember the password**) and (**the user name**)
5.  now replace all the information in the connection string.

the go to the terminal and run :

```bash
npx prisma db push
```

now all the tables you have defined in your prisma schema will be in the azure db
**if your having some problems with authentication use the ServerAdmin as your user name which you will find in your sql server overview and you can also reset the password.**
