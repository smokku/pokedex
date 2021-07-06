import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesSumFieldsModelBase } from "./PokemonV2ItemspritesSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesSumFieldsModel */
export interface PokemonV2ItemspritesSumFieldsModelType extends Instance<typeof PokemonV2ItemspritesSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesSumFieldsModel */
export { selectFromPokemonV2ItemspritesSumFields, pokemonV2ItemspritesSumFieldsModelPrimitives, PokemonV2ItemspritesSumFieldsModelSelector } from "./PokemonV2ItemspritesSumFieldsModel.base"

/**
 * PokemonV2ItemspritesSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemspritesSumFieldsModel = PokemonV2ItemspritesSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
