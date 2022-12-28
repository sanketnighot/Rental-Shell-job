 #!/bin/bash

export totalRewardIds=$(node getRewardId.js)

b=2
# echo $totalRewardIds
a=$((totalRewardIds / 5))

# echo $a
# echo "Bash version ${BASH_VERSION}..."

# pm2 stop updateRewards
# echo "LOG:------------Process Stopped"

for (( i=1; i<=$totalRewardIds; i+=50 ))
do 
  node updateRewards.js $i
  echo "LOG:------------Process Created"
done