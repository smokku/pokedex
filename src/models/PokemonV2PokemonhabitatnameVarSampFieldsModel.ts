import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameVarSampFieldsModelBase } from "./PokemonV2PokemonhabitatnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameVarSampFieldsModel */
export interface PokemonV2PokemonhabitatnameVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameVarSampFieldsModel */
export { selectFromPokemonV2PokemonhabitatnameVarSampFields, pokemonV2PokemonhabitatnameVarSampFieldsModelPrimitives, PokemonV2PokemonhabitatnameVarSampFieldsModelSelector } from "./PokemonV2PokemonhabitatnameVarSampFieldsModel.base"

/**
 * PokemonV2PokemonhabitatnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonhabitatnameVarSampFieldsModel = PokemonV2PokemonhabitatnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
