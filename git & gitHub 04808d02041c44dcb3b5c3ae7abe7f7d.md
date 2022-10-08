# git & gitHub

Section: KDT 3rd
작성일시: 2022년 10월 7일 오전 10:07
최종 편집일시: 2022년 10월 7일 오후 10:59

# Git 이란?

- 소스코드를 효율적으로 관리하기 위해 만들어진 분산형버전 관리시스템
- 코드 추적 프로그램

## 사용이유?

소스코드의 변경이력을 쉽게 확인

특정 시점에 저장된 버전과 비교하거나 특정 시점으로 돌아가기 위해

## Git 설정

- `git config —global init.defualtBranch main`
- 개행 문자 관련 처리(윈도우는 CR, LF / 맥은 LF만)
    
    `git config —global core. autocrlf true` (Window. CRLF >> LF)
    
    `git config —global core.autocrlf input` (Mac,터미널 
    
- `git config --glboal user.name (이름 작성)`
- `git config --global user.emain (이메일 주소 작성)`
- `git config --global --list`

## 터미널 명령어 정리

- `cd` (change directory): 디렉터리 (폴더) 이동
    
    `cd /` : 최상위 (루트) 디렉터리로 이동
    
    `cd ./`: 현재 디렉터리 (/ 생략 가능)
    
    `cd ../`: 부모 디렉터리로 이동(/ 생략 가능)
    
    `cd ./폴더명` : 현재 위치의 [폴더명]으로 이동
    
- `mkdir` (make directory): 디렉터리(폴더) 생성
- `ls` (list segments): 현재 위치의 파일 목록 조회
    
    `ls` : 단순 목록 확인
    
    `ls -l` : 파일 상세 정보
    
    `ls -a` : 숨김 파일 표시
    
    `ls -al` : 숨김 파일 표시 & 파일 상세 정보 확인
    

## Local과 Github Repository 연결하기

1. `cd` [폴더명]으로 접근
2. `git init` : 버전관리 시작하겠다고 등록
3. `git remote add origin [깃 저장소 주소]`  : 원격 저장소 주소를 origin이라는 이름으로 추가
4. `git remote-v` : remote repository 조회
5. `code .` : 현재 코드 불러오기

## Git 흐름 이해하기

| 작업공간 > | (git add) > | Stagling 영역 > | (git commit) > | Local Repository > | (git push) > | Remote Repository (Git hub) |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| pull complete | < | < | < | < | < | < git pull |  |

## Git 사용 순서

- `git status` (지금 상황은?)
- `git add .` (working directory >> staging area) ( 수정 사항 모두 staging area에 저장)
- `git status`  (지금 상황은? 생략가능)
- `git commit -m “commit”` (staging area >> local repository) ( commit 적용)
- `git log` (지금까지의 커밋 기록은?) (`git log --graph --oneline` 으로 한줄로 보기 가능)
- `git push origin main(또는 저장할 branch)` (local repository > remote repository) (commit을 깃허브에 저장)

## Branch

독립적으로 어떤 작업을 하기 위한 필요한 개념

평행 세계라고 생각하면 쉬움

## Branch 생성하기

- `git branch` : local branch 목록 확인
- `git branch 브랜치명` : 브랜치 생성
- `git checkout 브랜치명` : 브랜치명으로 이동
- `git branch -d 브랜치명` : 브랜치 삭제 (단 , 삭제할 branch가 현재 brahcn에 합쳐져 있을 경우에만)
- `git checkout -b` : branch 생성과 이동을 동시에
- `git reset HEAD^` : 가장 최근 커밋 취소

## Merge

git branch를 다른 branch로 합치는 과정

- `git checkout a`:  a 브랜치로 이동
- `git merge b` : b 브랜치와 merge 진행 (a로 b가 흡수)

## Branch의 종류

- Main(Master)  [어감이 좋지 않아서 Main으로 자주 쓰임] [제품으로 출시 될 수 있는 브런치]
- develop [다음 출시 버전을 개발하는 브랜치] [평소 개발 진행]
- feature [기능 개발을 진행하는 브랜치] [공유할 필요가 없어 로컬에서 진행 후 develop 에 merge 해 공유]
- release [출시 버전을 준비하는 브랜치] [배포를 위한 전용 브랜치]
- hotfix [긴급하게 수정해야 할 필요가 있는 경우 사용]

## Pull Request

- Push 권한이 없는 오픈 소스 프로젝트에 기여할 때 많이 사용함.
- 당황스러운 코드 충돌을 줄일 수 있음.

## .gitignore

- Git 버전 관리에서 제외할 파일 목록을 지정하는 파일
- Git 관리에서 특정 파일을 제외하기 위해서는 git에 올리기 전에 `.gitignore`에 파일 목록을 미리 추가해야 한다.
- `.txt` : 확장자가 txt로 끝나는 파일 모두 무시
- `!test.txt` : test.txt는 무시되지 않음.
- `test/` : test 폴더 내부의 모든 파일을 무시
- `/test` : 폴더 내에 존재하는 폴더 내부의 모든 파일 무시