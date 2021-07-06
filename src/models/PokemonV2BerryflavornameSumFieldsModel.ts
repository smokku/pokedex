import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameSumFieldsModelBase } from "./PokemonV2BerryflavornameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameSumFieldsModel */
export interface PokemonV2BerryflavornameSumFieldsModelType extends Instance<typeof PokemonV2BerryflavornameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameSumFieldsModel */
export { selectFromPokemonV2BerryflavornameSumFields, pokemonV2BerryflavornameSumFieldsModelPrimitives, PokemonV2BerryflavornameSumFieldsModelSelector } from "./PokemonV2BerryflavornameSumFieldsModel.base"

/**
 * PokemonV2BerryflavornameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2BerryflavornameSumFieldsModel = PokemonV2BerryflavornameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
