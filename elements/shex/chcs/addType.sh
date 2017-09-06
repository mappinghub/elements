for file in *.jsonld 
do
  name="${file%.*}"
  printf "/description/i\n  \"type\": \"chcss:$name\",\n.\nw\nq\n" |\
    /bin/ed $file
done
