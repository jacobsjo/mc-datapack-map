


<template>
<span class="faq" tabindex="0">
    <font-awesome-icon class="icon" icon="fa-circle-question" />
    <div class="popup">
        <slot></slot>
    </div>
</span>

</template>

<style scoped>
.faq {
    position: relative;
}

.icon {
    cursor: pointer;
}

.popup {
    display: none;
    position: absolute;
    left: 50%;
    top: -0.5rem;
    transform: translate(-50%, -100%);
    background-color: rgba(0, 0, 0, 0.75);
    padding: 0.2rem 0.6rem;
    border-radius: 0.5rem;
    max-width: 10rem;
    width: max-content;
    text-align: center;
}

.popup::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 0.5rem solid transparent;
	border-top-color: rgba(0, 0, 0, 0.75);;
	border-bottom: 0;
	margin-left: -0.5rem;
	margin-bottom: -0.5rem;
}

.faq:hover .popup,.faq:focus .popup{
    display: block;
}


</style>