import { Instance } from "mobx-state-tree"
import { PokemonV2GenderStddevSampFieldsModelBase } from "./PokemonV2GenderStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenderStddevSampFieldsModel */
export interface PokemonV2GenderStddevSampFieldsModelType extends Instance<typeof PokemonV2GenderStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderStddevSampFieldsModel */
export { selectFromPokemonV2GenderStddevSampFields, pokemonV2GenderStddevSampFieldsModelPrimitives, PokemonV2GenderStddevSampFieldsModelSelector } from "./PokemonV2GenderStddevSampFieldsModel.base"

/**
 * PokemonV2GenderStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2GenderStddevSampFieldsModel = PokemonV2GenderStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
