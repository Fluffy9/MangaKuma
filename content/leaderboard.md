---
title: "Leaderboard"
date: "2017-03-28T00:02:24+01:00"
type: "toplevel"
---
<style>
	table, tr, td{
		border: solid 1px white;
		text-align:center;
		padding:5px;
	}
	th{
		background-color: #007bff; /*#EF4E7B*/
	}
</style>
<div id="Leaderboard">
	<table style="width:100%">
	<tr>
		<th>Rank</th>
		<th>Name</th>
		<th>Hashes</th>
	</tr>
	<tr>
		<td>0</td>
		<td>0</td>
		<td>0</td>
	</tr>
	<tr>
		<td>0</td>
		<td>0</td>
		<td>0</td>
	</tr>
	</table>
</div>
<script>
$.get( "https://graftpool.net/api/miner/G8AiDDRjocF3L6a59JLtfC1yv4sw1QbSxPAq2CqxFohDgsNN8bfYArGhDkSDFZYby3Mk9rnu4ER8fArDqAu95H9tANzeE5M/stats", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});
</script>
