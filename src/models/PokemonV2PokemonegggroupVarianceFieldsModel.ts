import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupVarianceFieldsModelBase } from "./PokemonV2PokemonegggroupVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupVarianceFieldsModel */
export interface PokemonV2PokemonegggroupVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonegggroupVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupVarianceFieldsModel */
export { selectFromPokemonV2PokemonegggroupVarianceFields, pokemonV2PokemonegggroupVarianceFieldsModelPrimitives, PokemonV2PokemonegggroupVarianceFieldsModelSelector } from "./PokemonV2PokemonegggroupVarianceFieldsModel.base"

/**
 * PokemonV2PokemonegggroupVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonegggroupVarianceFieldsModel = PokemonV2PokemonegggroupVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
