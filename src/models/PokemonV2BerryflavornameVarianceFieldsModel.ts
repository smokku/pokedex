import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameVarianceFieldsModelBase } from "./PokemonV2BerryflavornameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameVarianceFieldsModel */
export interface PokemonV2BerryflavornameVarianceFieldsModelType extends Instance<typeof PokemonV2BerryflavornameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameVarianceFieldsModel */
export { selectFromPokemonV2BerryflavornameVarianceFields, pokemonV2BerryflavornameVarianceFieldsModelPrimitives, PokemonV2BerryflavornameVarianceFieldsModelSelector } from "./PokemonV2BerryflavornameVarianceFieldsModel.base"

/**
 * PokemonV2BerryflavornameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2BerryflavornameVarianceFieldsModel = PokemonV2BerryflavornameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
