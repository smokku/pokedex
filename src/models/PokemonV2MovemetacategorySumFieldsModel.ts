import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorySumFieldsModelBase } from "./PokemonV2MovemetacategorySumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorySumFieldsModel */
export interface PokemonV2MovemetacategorySumFieldsModelType extends Instance<typeof PokemonV2MovemetacategorySumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorySumFieldsModel */
export { selectFromPokemonV2MovemetacategorySumFields, pokemonV2MovemetacategorySumFieldsModelPrimitives, PokemonV2MovemetacategorySumFieldsModelSelector } from "./PokemonV2MovemetacategorySumFieldsModel.base"

/**
 * PokemonV2MovemetacategorySumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovemetacategorySumFieldsModel = PokemonV2MovemetacategorySumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
