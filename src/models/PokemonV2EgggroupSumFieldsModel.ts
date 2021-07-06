import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupSumFieldsModelBase } from "./PokemonV2EgggroupSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupSumFieldsModel */
export interface PokemonV2EgggroupSumFieldsModelType extends Instance<typeof PokemonV2EgggroupSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupSumFieldsModel */
export { selectFromPokemonV2EgggroupSumFields, pokemonV2EgggroupSumFieldsModelPrimitives, PokemonV2EgggroupSumFieldsModelSelector } from "./PokemonV2EgggroupSumFieldsModel.base"

/**
 * PokemonV2EgggroupSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EgggroupSumFieldsModel = PokemonV2EgggroupSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
