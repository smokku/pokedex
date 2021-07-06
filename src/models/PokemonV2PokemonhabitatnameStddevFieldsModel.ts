import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameStddevFieldsModelBase } from "./PokemonV2PokemonhabitatnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameStddevFieldsModel */
export interface PokemonV2PokemonhabitatnameStddevFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameStddevFieldsModel */
export { selectFromPokemonV2PokemonhabitatnameStddevFields, pokemonV2PokemonhabitatnameStddevFieldsModelPrimitives, PokemonV2PokemonhabitatnameStddevFieldsModelSelector } from "./PokemonV2PokemonhabitatnameStddevFieldsModel.base"

/**
 * PokemonV2PokemonhabitatnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonhabitatnameStddevFieldsModel = PokemonV2PokemonhabitatnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
