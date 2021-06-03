# computer


vmess://eyJhZGQiOiIzOC4xNDMuOC4xNjkiLCJhaWQiOiIyIiwiaG9zdCI6IiIsImlkIjoiNTFkMjRmNDctOTFiMi0zNWRhLTkwZGYtM2E0NTQyN2FjOTUxIiwibmV0Ijoid3MiLCJwYXRoIjoiL3YycmF5IiwicG9ydCI6IjQ0MyIsInBzIjoi5rSb5p2J55+2Q04y44CQMuaciDnlj7fop6PplIFOZXRmbGl444CRIiwidGxzIjoibm9uZSIsInR5cGUiOiJub25lIiwidiI6IjIifQ==
vmess://eyJhZGQiOiIxMDQuMTkyLjgwLjE5MyIsImFpZCI6IjIiLCJob3N0IjoiIiwiaWQiOiI1MWQyNGY0Ny05MWIyLTM1ZGEtOTBkZi0zYTQ1NDI3YWM5NTEiLCJuZXQiOiJ3cyIsInBhdGgiOiIvdjJyYXkiLCJwb3J0IjoiNDQzIiwicHMiOiLmtJvmnYnnn7ZDTjLjgJDkuI3pmZDmtYHph4805pyIOOWPt+OAkSIsInRscyI6Im5vbmUiLCJ0eXBlIjoibm9uZSIsInYiOiIyIn0=
vmess://eyJhZGQiOiIxMDQuMjMzLjE1MC4yMDciLCJhaWQiOiIyIiwiaG9zdCI6IiIsImlkIjoiNTFkMjRmNDctOTFiMi0zNWRhLTkwZGYtM2E0NTQyN2FjOTUxIiwibmV0Ijoid3MiLCJwYXRoIjoiL3YycmF5IiwicG9ydCI6IjQ0MyIsInBzIjoi5rSb5p2J55+2Q04y44CQ5LiN6ZmQ5rWB6YePMjAyMeW5tDPmnIjjgJEiLCJ0bHMiOiJub25lIiwidHlwZSI6Im5vbmUiLCJ2IjoiMiJ9


function proxy_off(){
        unset http_proxy
        unset https_proxy
        unset ftp_proxy
        unset rsync_proxy
        echo -e "已关闭代理"
}
 
function proxy_on() {
        export no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"
        export http_proxy="http://127.0.0.1:1087"
        export https_proxy=$http_proxy
        export ftp_proxy=$http_proxy
        export rsync_proxy=$http_proxy
        export HTTP_PROXY=$http_proxy
        export HTTPS_PROXY=$http_proxy
        export FTP_PROXY=$http_proxy
        export RSYNC_PROXY=$http_proxy
        echo -e "已开启代理"
}