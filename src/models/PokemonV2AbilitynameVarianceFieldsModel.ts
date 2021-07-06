import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameVarianceFieldsModelBase } from "./PokemonV2AbilitynameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameVarianceFieldsModel */
export interface PokemonV2AbilitynameVarianceFieldsModelType extends Instance<typeof PokemonV2AbilitynameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameVarianceFieldsModel */
export { selectFromPokemonV2AbilitynameVarianceFields, pokemonV2AbilitynameVarianceFieldsModelPrimitives, PokemonV2AbilitynameVarianceFieldsModelSelector } from "./PokemonV2AbilitynameVarianceFieldsModel.base"

/**
 * PokemonV2AbilitynameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2AbilitynameVarianceFieldsModel = PokemonV2AbilitynameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
