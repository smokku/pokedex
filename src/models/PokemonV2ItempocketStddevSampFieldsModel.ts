import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketStddevSampFieldsModelBase } from "./PokemonV2ItempocketStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketStddevSampFieldsModel */
export interface PokemonV2ItempocketStddevSampFieldsModelType extends Instance<typeof PokemonV2ItempocketStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketStddevSampFieldsModel */
export { selectFromPokemonV2ItempocketStddevSampFields, pokemonV2ItempocketStddevSampFieldsModelPrimitives, PokemonV2ItempocketStddevSampFieldsModelSelector } from "./PokemonV2ItempocketStddevSampFieldsModel.base"

/**
 * PokemonV2ItempocketStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItempocketStddevSampFieldsModel = PokemonV2ItempocketStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
