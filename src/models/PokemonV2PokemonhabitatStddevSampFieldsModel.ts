import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatStddevSampFieldsModelBase } from "./PokemonV2PokemonhabitatStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatStddevSampFieldsModel */
export interface PokemonV2PokemonhabitatStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatStddevSampFieldsModel */
export { selectFromPokemonV2PokemonhabitatStddevSampFields, pokemonV2PokemonhabitatStddevSampFieldsModelPrimitives, PokemonV2PokemonhabitatStddevSampFieldsModelSelector } from "./PokemonV2PokemonhabitatStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonhabitatStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonhabitatStddevSampFieldsModel = PokemonV2PokemonhabitatStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
