import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameVarianceFieldsModelBase } from "./PokemonV2EgggroupnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameVarianceFieldsModel */
export interface PokemonV2EgggroupnameVarianceFieldsModelType extends Instance<typeof PokemonV2EgggroupnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameVarianceFieldsModel */
export { selectFromPokemonV2EgggroupnameVarianceFields, pokemonV2EgggroupnameVarianceFieldsModelPrimitives, PokemonV2EgggroupnameVarianceFieldsModelSelector } from "./PokemonV2EgggroupnameVarianceFieldsModel.base"

/**
 * PokemonV2EgggroupnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EgggroupnameVarianceFieldsModel = PokemonV2EgggroupnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
