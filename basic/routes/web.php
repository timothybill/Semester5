<?php

use App\Livewire\Main;
use Illuminate\Support\Facades\Route;


route::get('/',main::class)-> name('main');
