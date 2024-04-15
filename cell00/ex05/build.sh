path=$(pwd)
if [ $# -eq 0 ]
    then
	echo "No arguments supplied"
	exit 1
fi

for  i;
do
	if [ -n "$path/ex$i" ]
	then
		mkdir "ex$i"
	fi
done

