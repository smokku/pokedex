import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategoryMinFieldsModelBase } from "./PokemonV2MovemetacategoryMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategoryMinFieldsModel */
export interface PokemonV2MovemetacategoryMinFieldsModelType extends Instance<typeof PokemonV2MovemetacategoryMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategoryMinFieldsModel */
export { selectFromPokemonV2MovemetacategoryMinFields, pokemonV2MovemetacategoryMinFieldsModelPrimitives, PokemonV2MovemetacategoryMinFieldsModelSelector } from "./PokemonV2MovemetacategoryMinFieldsModel.base"

/**
 * PokemonV2MovemetacategoryMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovemetacategoryMinFieldsModel = PokemonV2MovemetacategoryMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
