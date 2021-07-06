import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameSumFieldsModelBase } from "./PokemonV2StatnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameSumFieldsModel */
export interface PokemonV2StatnameSumFieldsModelType extends Instance<typeof PokemonV2StatnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameSumFieldsModel */
export { selectFromPokemonV2StatnameSumFields, pokemonV2StatnameSumFieldsModelPrimitives, PokemonV2StatnameSumFieldsModelSelector } from "./PokemonV2StatnameSumFieldsModel.base"

/**
 * PokemonV2StatnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2StatnameSumFieldsModel = PokemonV2StatnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
