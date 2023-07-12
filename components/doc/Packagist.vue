<template>
  <div>
    <div id="php" class="block">
      <div class="flex-space top">
        <h2 class="title">Module Packagist</h2>
      </div>
      <p>
        Le module Packagist de <a href="https://github.com/Blagues-API/blagues-api-php">Blagues-API</a> supporte
        l'intégralité des options présente sur l'API, il permettra d'intéragir simplement avec l'API depuis le langage
        PHP de manière synchrone.
      </p>
    </div>
    <div id="install" class="block">
      <div class="flex-space">
        <a href="#install" class="title-container">
          <h3 class="title">Installation</h3>
        </a>
      </div>
      <div>
        <pre>
          <code class="language-bash">
            composer require zuruuh/blagues-api
          </code>
        </pre>
      </div>
    </div>
    <div id="setup" class="block">
      <div class="flex-space">
        <a href="#setup" class="title-container">
          <h3 class="title">Mise en place</h3>
        </a>
      </div>
      <pre>
        <code class="language-javascript">
          use Zuruuh/BlaguesApi\Factory\BlaguesApiFactory;
          use Zuruuh/BlaguesApi\Model\Joke;
        </code>
      </pre>
      <pre>
        <code class="language-javascript">
          $blaguesApi = BlaguesApiFactory::create('<mark>VOTRE_TOKEN_ICI</mark>');
        </code>
      </pre>
      <p class="text">
        Il est fortement conseillé d'utiliser les variables d'environnement avec un package comme
        <a href="https://packagist.org/packages/symfony/dotenv">symfony/dotenv</a> par exemple, afin de ne pas mettre
        votre token dans le code source de votre projet.
      </p>
      <p class="text"></p>
    </div>
    <div id="use" class="block">
      <a href="#use" class="title-container">
        <h3 class="title">Utilisation</h3>
      </a>
      <p class="text">
        Différentes méthodes vous sont rendues disponibles afin d'intéragir plus facilement avec l'API depuis votre
        projet.
      </p>
      <div id="random-joke" class="block">
        <a href="#random-joke" class="title-container">
          <h4 class="title">Blague aléatoire</h4>
        </a>
        <pre>
          <code class="language-javascript">
            $joke = $blaguesApi->getRandom();
          </code>
        </pre>
        <p class="text">A cette méthode, vous pouvez spécifier certains types que vous ne souhaitez pas recevoir.</p>
        <pre>
          <code class="language-javascript">
            $joke = $blaguesApi->getRandom([Joke::TYPE_DARK]);
          </code>
        </pre>
      </div>
      <div id="random-categorized-joke" class="block">
        <a href="#random-categorized-joke" class="title-container">
          <h4 class="title">Blague aléatoire d'une catégorie</h4>
        </a>
        <pre>
          <code class="language-javascript">
            $joke = $blaguesApi->getByType(Joke::TYPE_DEV);
          </code>
        </pre>
      </div>
      <div id="joke-by-id" class="block">
        <a href="#joke-by-id" class="title-container">
          <h4 class="title">Blague à partir de son ID</h4>
        </a>
        <p class="text"></p>
        <pre>
          <code class="language-javascript">
            $joke = $blaguesApi->getById(1234);
          </code>
        </pre>
      </div>
      <div id="count-joke" class="block">
        <a href="#count-joke" class="title-container">
          <h4 class="title">Nombres de blagues</h4>
        </a>
        <pre>
          <code class="language-javascript">
            $joke = $blaguesApi->count();
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>
