import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameStddevPopFieldsModelBase } from "./PokemonV2PokemonhabitatnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameStddevPopFieldsModel */
export interface PokemonV2PokemonhabitatnameStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameStddevPopFieldsModel */
export { selectFromPokemonV2PokemonhabitatnameStddevPopFields, pokemonV2PokemonhabitatnameStddevPopFieldsModelPrimitives, PokemonV2PokemonhabitatnameStddevPopFieldsModelSelector } from "./PokemonV2PokemonhabitatnameStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonhabitatnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonhabitatnameStddevPopFieldsModel = PokemonV2PokemonhabitatnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
