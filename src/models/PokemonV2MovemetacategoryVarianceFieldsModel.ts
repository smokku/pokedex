import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategoryVarianceFieldsModelBase } from "./PokemonV2MovemetacategoryVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategoryVarianceFieldsModel */
export interface PokemonV2MovemetacategoryVarianceFieldsModelType extends Instance<typeof PokemonV2MovemetacategoryVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategoryVarianceFieldsModel */
export { selectFromPokemonV2MovemetacategoryVarianceFields, pokemonV2MovemetacategoryVarianceFieldsModelPrimitives, PokemonV2MovemetacategoryVarianceFieldsModelSelector } from "./PokemonV2MovemetacategoryVarianceFieldsModel.base"

/**
 * PokemonV2MovemetacategoryVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovemetacategoryVarianceFieldsModel = PokemonV2MovemetacategoryVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
