import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategoryAvgFieldsModelBase } from "./PokemonV2MovemetacategoryAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategoryAvgFieldsModel */
export interface PokemonV2MovemetacategoryAvgFieldsModelType extends Instance<typeof PokemonV2MovemetacategoryAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategoryAvgFieldsModel */
export { selectFromPokemonV2MovemetacategoryAvgFields, pokemonV2MovemetacategoryAvgFieldsModelPrimitives, PokemonV2MovemetacategoryAvgFieldsModelSelector } from "./PokemonV2MovemetacategoryAvgFieldsModel.base"

/**
 * PokemonV2MovemetacategoryAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovemetacategoryAvgFieldsModel = PokemonV2MovemetacategoryAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
