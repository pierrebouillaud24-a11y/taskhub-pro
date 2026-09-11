
import React,{useState} from 'react';
import Dashboard from './components/Dashboard';
import CalendarView from './components/CalendarView';
import WeeklyView from './components/WeeklyView';
export default function App(){
const [view,setView]=useState('dashboard');
const [tasks,setTasks]=useState([{id:1,title:'Préparer offre',category:'Offres',priority:'Haute',done:false}]);
const addTask=()=>setTasks([...tasks,{id:Date.now(),title:'Nouvelle tâche',category:'Travail',priority:'Moyenne',done:false}]);
return <div style={{fontFamily:'Arial',padding:20}}>
<h1>TaskHub Pro</h1>
<button onClick={()=>setView('dashboard')}>Dashboard</button>
<button onClick={()=>setView('week')}>Semaine</button>
<button onClick={()=>setView('calendar')}>Calendrier</button>
<button onClick={()=>window.open('https://teams.microsoft.com')}>Teams</button>
<button onClick={()=>window.open('https://outlook.office.com')}>Outlook</button>
<button onClick={addTask}>Ajouter tâche</button>
{view==='dashboard' && <Dashboard tasks={tasks}/>}
{view==='week' && <WeeklyView/>}
{view==='calendar' && <CalendarView/>}
<ul>{tasks.map(t=><li key={t.id}><input type='checkbox' checked={t.done} onChange={()=>setTasks(tasks.map(x=>x.id===t.id?{...x,done:!x.done}:x))}/>{t.title} - {t.category} - {t.priority}</li>)}</ul>
<div><h3>Fonctions incluses</h3><ul><li>Catégories</li><li>Vue semaine</li><li>Calendrier</li><li>Rappels (placeholder)</li><li>Teams/Outlook</li></ul></div>
</div>}
