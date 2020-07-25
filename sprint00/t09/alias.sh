if [ -n "$1" ]; then
touch $1
echo 'alias ga="git add"\nalias gcmsg="git commit -m"\nalias gp="git push"' >> $1
fi
