
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin {ACCOUNTID}.dkr.ecr.us-east-1.amazonaws.com

docker build -t cloud7works .

docker tag cloud7works:latest {ACCOUNTID}.dkr.ecr.us-east-1.amazonaws.com/cloud7works:latest

docker push {ACCOUNTID}.dkr.ecr.us-east-1.amazonaws.com/cloud7works:latest