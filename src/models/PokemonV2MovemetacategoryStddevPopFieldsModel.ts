import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategoryStddevPopFieldsModelBase } from "./PokemonV2MovemetacategoryStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategoryStddevPopFieldsModel */
export interface PokemonV2MovemetacategoryStddevPopFieldsModelType extends Instance<typeof PokemonV2MovemetacategoryStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategoryStddevPopFieldsModel */
export { selectFromPokemonV2MovemetacategoryStddevPopFields, pokemonV2MovemetacategoryStddevPopFieldsModelPrimitives, PokemonV2MovemetacategoryStddevPopFieldsModelSelector } from "./PokemonV2MovemetacategoryStddevPopFieldsModel.base"

/**
 * PokemonV2MovemetacategoryStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovemetacategoryStddevPopFieldsModel = PokemonV2MovemetacategoryStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
