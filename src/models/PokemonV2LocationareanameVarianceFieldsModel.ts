import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameVarianceFieldsModelBase } from "./PokemonV2LocationareanameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameVarianceFieldsModel */
export interface PokemonV2LocationareanameVarianceFieldsModelType extends Instance<typeof PokemonV2LocationareanameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameVarianceFieldsModel */
export { selectFromPokemonV2LocationareanameVarianceFields, pokemonV2LocationareanameVarianceFieldsModelPrimitives, PokemonV2LocationareanameVarianceFieldsModelSelector } from "./PokemonV2LocationareanameVarianceFieldsModel.base"

/**
 * PokemonV2LocationareanameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2LocationareanameVarianceFieldsModel = PokemonV2LocationareanameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
