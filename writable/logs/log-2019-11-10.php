<?php defined('SYSTEMPATH') || exit('No direct script access allowed'); ?>

CRITICAL - 2019-11-10 03:37:11 --> file_get_contents(http://api.demo:8080): failed to open stream: Connection refused
#0 [internal function]: CodeIgniter\Debug\Exceptions->errorHandler(2, 'file_get_conten...', '/code/app/Contr...', 10, Array)
#1 /code/app/Controllers/Home.php(10): file_get_contents('http://api.demo...')
#2 /code/vendor/codeigniter4/framework/system/CodeIgniter.php(847): App\Controllers\Home->index()
#3 /code/vendor/codeigniter4/framework/system/CodeIgniter.php(338): CodeIgniter\CodeIgniter->runController(Object(App\Controllers\Home))
#4 /code/vendor/codeigniter4/framework/system/CodeIgniter.php(246): CodeIgniter\CodeIgniter->handleRequest(NULL, Object(Config\Cache), false)
#5 /code/public/index.php(44): CodeIgniter\CodeIgniter->run()
#6 {main}
CRITICAL - 2019-11-10 09:04:06 --> syntax error, unexpected '&'
#0 /code/vendor/codeigniter4/framework/system/Common.php(176): CodeIgniter\View\View->render('liste', Array, NULL)
#1 /code/app/Controllers/Home.php(10): view('liste', Array)
#2 /code/vendor/codeigniter4/framework/system/CodeIgniter.php(847): App\Controllers\Home->index()
#3 /code/vendor/codeigniter4/framework/system/CodeIgniter.php(338): CodeIgniter\CodeIgniter->runController(Object(App\Controllers\Home))
#4 /code/vendor/codeigniter4/framework/system/CodeIgniter.php(246): CodeIgniter\CodeIgniter->handleRequest(NULL, Object(Config\Cache), false)
#5 /code/public/index.php(44): CodeIgniter\CodeIgniter->run()
#6 {main}
