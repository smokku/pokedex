import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorVarianceFieldsModelBase } from "./PokemonV2BerryflavorVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorVarianceFieldsModel */
export interface PokemonV2BerryflavorVarianceFieldsModelType extends Instance<typeof PokemonV2BerryflavorVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorVarianceFieldsModel */
export { selectFromPokemonV2BerryflavorVarianceFields, pokemonV2BerryflavorVarianceFieldsModelPrimitives, PokemonV2BerryflavorVarianceFieldsModelSelector } from "./PokemonV2BerryflavorVarianceFieldsModel.base"

/**
 * PokemonV2BerryflavorVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2BerryflavorVarianceFieldsModel = PokemonV2BerryflavorVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
