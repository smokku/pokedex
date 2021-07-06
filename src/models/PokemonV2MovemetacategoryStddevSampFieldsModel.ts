import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategoryStddevSampFieldsModelBase } from "./PokemonV2MovemetacategoryStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategoryStddevSampFieldsModel */
export interface PokemonV2MovemetacategoryStddevSampFieldsModelType extends Instance<typeof PokemonV2MovemetacategoryStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategoryStddevSampFieldsModel */
export { selectFromPokemonV2MovemetacategoryStddevSampFields, pokemonV2MovemetacategoryStddevSampFieldsModelPrimitives, PokemonV2MovemetacategoryStddevSampFieldsModelSelector } from "./PokemonV2MovemetacategoryStddevSampFieldsModel.base"

/**
 * PokemonV2MovemetacategoryStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovemetacategoryStddevSampFieldsModel = PokemonV2MovemetacategoryStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
