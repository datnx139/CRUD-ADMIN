if [ "$1" = "page" ]; then

  npx nuxi add $1 /$2/index

  npx nuxi add $1 /$2/[id]

else
  npx nuxi add $1 $2
fi
