function buscarissues(){
	
	function GithubRepo(username, reponame){
		var url = 'https://api.github.com/repos/' + username + '/' + reponame + '/issues';
		var githubrepo = {
			'buscar_issues': function(){
				$.get(url).success(function(result){
					limpa_tabela();
					for (r in result){
						popular_tabela(result[r]);
					}
				});
			},
		}
		return githubrepo;
	}

	function popular_tabela(item){
		var table = $('#issues');
		var list = '<tr>';
		list += '<td>' + item.title + '</td>';
		list += '<td> <a target="_blank" href="' + item.html_url + '">' + item.html_url + ' </a> </td>';
		list += '<td>' + item.state + '</td>';
		list += '</tr>';
		table.append(list);
	}

	function limpa_tabela(){
		var item_list = $('#issues tr');
		item_list.remove();
	}

	var user = $('#user').val();
	var repositorio = $('#reponame').val();
	
	var le_repo = GithubRepo(user, repositorio);
	le_repo.buscar_issues();
    
}