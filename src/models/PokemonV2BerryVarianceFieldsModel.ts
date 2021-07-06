import { Instance } from "mobx-state-tree"
import { PokemonV2BerryVarianceFieldsModelBase } from "./PokemonV2BerryVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryVarianceFieldsModel */
export interface PokemonV2BerryVarianceFieldsModelType extends Instance<typeof PokemonV2BerryVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryVarianceFieldsModel */
export { selectFromPokemonV2BerryVarianceFields, pokemonV2BerryVarianceFieldsModelPrimitives, PokemonV2BerryVarianceFieldsModelSelector } from "./PokemonV2BerryVarianceFieldsModel.base"

/**
 * PokemonV2BerryVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2BerryVarianceFieldsModel = PokemonV2BerryVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
