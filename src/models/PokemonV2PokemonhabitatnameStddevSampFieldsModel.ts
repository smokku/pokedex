import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameStddevSampFieldsModelBase } from "./PokemonV2PokemonhabitatnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameStddevSampFieldsModel */
export interface PokemonV2PokemonhabitatnameStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameStddevSampFieldsModel */
export { selectFromPokemonV2PokemonhabitatnameStddevSampFields, pokemonV2PokemonhabitatnameStddevSampFieldsModelPrimitives, PokemonV2PokemonhabitatnameStddevSampFieldsModelSelector } from "./PokemonV2PokemonhabitatnameStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonhabitatnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonhabitatnameStddevSampFieldsModel = PokemonV2PokemonhabitatnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
