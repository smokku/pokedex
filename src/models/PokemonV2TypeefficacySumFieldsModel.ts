import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacySumFieldsModelBase } from "./PokemonV2TypeefficacySumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacySumFieldsModel */
export interface PokemonV2TypeefficacySumFieldsModelType extends Instance<typeof PokemonV2TypeefficacySumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacySumFieldsModel */
export { selectFromPokemonV2TypeefficacySumFields, pokemonV2TypeefficacySumFieldsModelPrimitives, PokemonV2TypeefficacySumFieldsModelSelector } from "./PokemonV2TypeefficacySumFieldsModel.base"

/**
 * PokemonV2TypeefficacySumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2TypeefficacySumFieldsModel = PokemonV2TypeefficacySumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
