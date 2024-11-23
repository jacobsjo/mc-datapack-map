


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
    top: calc(100% + 0.5rem);
    transform: translate(-50%, 0);
    background-color: rgba(0, 0, 0, 0.75);
    padding: 0.2rem 0.6rem;
    border-radius: 0.5rem;
    max-width: 15rem;
    width: max-content;
    text-align: center;
}

.popup::after {
	content: '';
	position: absolute;
	top: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 0.5rem solid transparent;
	border-bottom-color: rgba(0, 0, 0, 0.75);;
	border-top: 0;
	margin-left: -0.5rem;
	margin-top: -0.5rem;
}

.faq:hover .popup,.faq:focus .popup{
    display: block;
}


</style>