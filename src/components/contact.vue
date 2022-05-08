<template>
  <div class="contact">
      <h3 class="contact-header">Comunicate con Nosotros</h3>
      <form class="form row ">
          <div class="col">
            <input type="text" class="form-control" name="name" id="form-name" placeholder="Tu nombre">
          </div>
          <div class="col">
            <input type="email" class="form-control" name="email" id="form-mail" placeholder="tumail@example.com">
          </div>
          <div class="col">
            <textarea class="form-control" name="comment" id="form-comment" placeholder="Tu mensaje"></textarea>
          </div>
          <div class="form-btn col">
              <button type="submit" class="butn">Enviar</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style>
.contact{
    width: 80%;
    margin: 2rem auto;
}

h3{
    text-transform: capitalize;
    text-decoration: underline;
    text-decoration-color: #9e6a27;
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
}

.form{
    background-color: #eeeeee;
    margin: 3rem auto 0 auto;
    border: 3px solid rgb(158, 106, 39);
    border-radius: 3rem;
    padding: 1.5rem 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.form input{
    border: 1px solid rgba(158,106,39,.5);
    border-radius: .5rem;
    font-family: inherit;
}

textarea{
    font-family: inherit;
    border: 1px solid rgba(158,106,39,.5);
    border-radius: .5rem;
}

.butn{
    font-size: 1.2rem;
    text-transform: uppercase;
    display: block;
    padding: .5rem 1rem;
    background-color: rgb(158, 106, 39);
    color: #e4e4e4;
    border: none;
    cursor: pointer;
}

.butn:hover{
    border: none;
    background-color: rgb(94, 63, 23);;
}

@media (max-width: 920px) {
    .contact{
        width: 80%;
    }
    .form{
        display: block;
    }
    input, textarea{
        margin-bottom: 1rem;
    }
    .butn{
        margin: 0 auto;
        display: block;
        width: 60%;
    }

    
}
</style>