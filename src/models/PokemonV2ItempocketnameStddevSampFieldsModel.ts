import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameStddevSampFieldsModelBase } from "./PokemonV2ItempocketnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameStddevSampFieldsModel */
export interface PokemonV2ItempocketnameStddevSampFieldsModelType extends Instance<typeof PokemonV2ItempocketnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameStddevSampFieldsModel */
export { selectFromPokemonV2ItempocketnameStddevSampFields, pokemonV2ItempocketnameStddevSampFieldsModelPrimitives, PokemonV2ItempocketnameStddevSampFieldsModelSelector } from "./PokemonV2ItempocketnameStddevSampFieldsModel.base"

/**
 * PokemonV2ItempocketnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItempocketnameStddevSampFieldsModel = PokemonV2ItempocketnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
