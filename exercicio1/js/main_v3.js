function buscarissues(){

    function GithubRepo(username, reponame){
        var issues = [];
        var url = 'https://api.github.com/repos/' + username + '/' + reponame + '/issues';

        var githubrepo = {
            'buscar_issues': function(function_callback){
                $.get(url).success(function(result){
                    issues = result;
                    function_callback();
                });
            },
            'popular_tabela': function(){
                var table = $('#issues');
                var list = '';
                for (i in issues){
                    list += '<tr>';
                    list += '<td>' + issues[i].title + '</td>';
                    list += '<td> <a target="_blank" href="' + issues[i].html_url + '">' + issues[i].html_url + ' </a> </td>';
                    list += '<td>' + issues[i].state + '</td>';
                    list += '</tr>';
                }
                table.append(list);
            },
            'limpar_tabela':  function(){
                var item_list = $('#issues tr');
                item_list.remove();
            }
        }

        return githubrepo;
    }

    var user = $('#user').val();
    var repositorio = $('#reponame').val();

    var le_repo = GithubRepo(user, repositorio);

    le_repo.buscar_issues(function callback(){
        le_repo.limpar_tabela();
        le_repo.popular_tabela();
    });
}