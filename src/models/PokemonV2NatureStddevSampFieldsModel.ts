import { Instance } from "mobx-state-tree"
import { PokemonV2NatureStddevSampFieldsModelBase } from "./PokemonV2NatureStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NatureStddevSampFieldsModel */
export interface PokemonV2NatureStddevSampFieldsModelType extends Instance<typeof PokemonV2NatureStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureStddevSampFieldsModel */
export { selectFromPokemonV2NatureStddevSampFields, pokemonV2NatureStddevSampFieldsModelPrimitives, PokemonV2NatureStddevSampFieldsModelSelector } from "./PokemonV2NatureStddevSampFieldsModel.base"

/**
 * PokemonV2NatureStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2NatureStddevSampFieldsModel = PokemonV2NatureStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
